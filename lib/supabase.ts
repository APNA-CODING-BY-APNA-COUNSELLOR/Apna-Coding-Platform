import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for admin operations
export const createServerClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

// Database Types
export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: "user" | "admin"
  github_url?: string
  linkedin_url?: string
  bio?: string
  skills?: string[]
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  image_url?: string
  price: number
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  technologies: string[]
  instructor: string
  students_count: number
  rating: number
  status: "active" | "inactive" | "draft"
  created_at: string
  updated_at: string
}

export interface Hackathon {
  id: string
  title: string
  description: string
  image_url?: string
  start_date: string
  end_date: string
  registration_deadline?: string
  location: string
  prize_pool: string
  participants_count: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  registration_open: boolean
  technologies: string[]
  registration_link?: string
  created_at: string
  updated_at: string
}

export interface Job {
  id: string
  title: string
  company: string
  description: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  salary: string
  experience: string
  technologies: string[]
  company_logo?: string
  status: "active" | "inactive" | "filled"
  posted_date: string
  application_deadline?: string
  apply_link?: string
  created_at: string
  updated_at: string
}

export interface Community {
  id: string
  name: string
  description: string
  member_count: number
  type: "discord" | "telegram" | "whatsapp"
  invite_link: string
  status: "active" | "inactive"
  created_at: string
  updated_at: string
}

export interface HackathonRegistration {
  id: string
  hackathon_id: string
  user_id: string
  registered_at: string
  status: "registered" | "cancelled" | "attended"
  team_name?: string
  team_members?: any[]
  additional_info?: any
  created_at: string
  updated_at: string
}

// Auth functions with Google OAuth
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })

  // Create user profile in database
  if (data.user && !error) {
    await createUserProfile(data.user.id, {
      email: data.user.email!,
      full_name: fullName,
      role: data.user.email === "sonishriyash@gmail.com" ? "admin" : "user",
    })
  }

  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error) {
      console.error("Auth error:", error)
      return null
    }

    if (!user) {
      return null
    }

    // Get user profile from users table
    const { data: profile, error: profileError } = await supabase.from("users").select("*").eq("id", user.id).single()

    if (profileError && profileError.code !== "PGRST116") {
      console.error("Profile fetch error:", profileError)
      return null
    }

    // If no profile exists, create one
    if (!profile) {
      const newProfile = {
        id: user.id,
        email: user.email!,
        full_name: user.user_metadata?.full_name || user.user_metadata?.name || "",
        avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture || "",
        role: user.email === "sonishriyash@gmail.com" ? "admin" : "user",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      const { data: createdProfile, error: createError } = await supabase
        .from("users")
        .insert([newProfile])
        .select()
        .single()

      if (createError) {
        console.error("Profile creation error:", createError)
        return null
      }

      return createdProfile
    }

    return profile
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}

export const getSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

// Create user profile in database
export const createUserProfile = async (
  userId: string,
  userData: {
    email: string
    full_name: string
    role?: "user" | "admin"
    avatar_url?: string
  },
) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .upsert(
        {
          id: userId,
          ...userData,
          role: userData.email === "sonishriyash@gmail.com" ? "admin" : userData.role || "user",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "id",
        },
      )
      .select()

    return { data, error }
  } catch (error) {
    console.error("Error in createUserProfile:", error)
    return { data: null, error }
  }
}

// Get user profile from database
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase.from("users").select("*").eq("id", userId).single()

    if (error && error.code === "PGRST116") {
      // Profile doesn't exist, return null without error
      return { data: null, error: null }
    }

    return { data, error }
  } catch (error) {
    console.error("Error in getUserProfile:", error)
    return { data: null, error }
  }
}

// Update user profile with better error handling
export const updateUserProfile = async (userId: string, updates: Partial<User>) => {
  try {
    // First, check if user exists
    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .single()

    if (fetchError && fetchError.code === "PGRST116") {
      // User doesn't exist, create new profile
      const { data: authData, error: authError } = await supabase.auth.getUser()
      if (authError || !authData.user) {
        throw new Error("User not authenticated to create profile.")
      }

      const { data, error } = await supabase
        .from("users")
        .insert({
          id: userId,
          email: authData.user.email,
          full_name: updates.full_name || "",
          bio: updates.bio || null,
          github_url: updates.github_url || null,
          linkedin_url: updates.linkedin_url || null,
          skills: updates.skills || null,
          role: authData.user.email === "sonishriyash@gmail.com" ? "admin" : "user",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select()

      return { data, error }
    } else if (fetchError) {
      return { data: null, error: fetchError }
    }

    // User exists, update profile
    const { data, error } = await supabase
      .from("users")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)
      .select()

    return { data, error }
  } catch (error) {
    console.error("Error in updateUserProfile:", error)
    return { data: null, error }
  }
}

// Admin check function with enhanced logic for sonishriyash@gmail.com
export const isAdmin = async (email?: string) => {
  if (!email) {
    const user = await getCurrentUser()
    if (!user?.email) return false
    email = user.email
  }

  // Check if the email is the main admin
  if (email === "sonishriyash@gmail.com") {
    return true
  }

  // Check database for additional admins
  try {
    const { data, error } = await supabase.from("users").select("role").eq("email", email).single()

    if (error) return false
    return data?.role === "admin"
  } catch {
    return false
  }
}

export async function checkUserAuth() {
  try {
    const user = await getCurrentUser()
    return user
  } catch (error) {
    console.error("Error checking user auth:", error)
    return null
  }
}

// Database functions
export const getCourses = async () => {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false })
  return { data, error }
}

export const getHackathons = async () => {
  const { data, error } = await supabase.from("hackathons").select("*").order("start_date", { ascending: true })
  return { data, error }
}

export const getJobs = async () => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "active")
    .order("posted_date", { ascending: false })
  return { data, error }
}

export const getCommunities = async () => {
  const { data, error } = await supabase
    .from("communities")
    .select("*")
    .eq("status", "active")
    .order("member_count", { ascending: false })
  return { data, error }
}

// Admin functions for CRUD operations
export const getAllCourses = async () => {
  const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: false })
  return { data, error }
}

export const getAllHackathons = async () => {
  const { data, error } = await supabase.from("hackathons").select("*").order("created_at", { ascending: false })
  return { data, error }
}

export const getAllJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false })
  return { data, error }
}

export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: false })
  return { data, error }
}

export const createCourse = async (course: Omit<Course, "id" | "created_at" | "updated_at">) => {
  const { data, error } = await supabase.from("courses").insert([course]).select()
  return { data, error }
}

export const updateCourse = async (id: string, updates: Partial<Course>) => {
  const { data, error } = await supabase
    .from("courses")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
  return { data, error }
}

export const deleteCourse = async (id: string) => {
  const { data, error } = await supabase.from("courses").delete().eq("id", id)
  return { data, error }
}

export const createHackathon = async (hackathon: Omit<Hackathon, "id" | "created_at" | "updated_at">) => {
  const { data, error } = await supabase.from("hackathons").insert([hackathon]).select()
  return { data, error }
}

export const updateHackathon = async (id: string, updates: Partial<Hackathon>) => {
  const { data, error } = await supabase
    .from("hackathons")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
  return { data, error }
}

export const deleteHackathon = async (id: string) => {
  const { data, error } = await supabase.from("hackathons").delete().eq("id", id)
  return { data, error }
}

export const createJob = async (job: Omit<Job, "id" | "created_at" | "updated_at">) => {
  const { data, error } = await supabase.from("jobs").insert([job]).select()
  return { data, error }
}

export const updateJob = async (id: string, updates: Partial<Job>) => {
  const { data, error } = await supabase
    .from("jobs")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
  return { data, error }
}

export const deleteJob = async (id: string) => {
  const { data, error } = await supabase.from("jobs").delete().eq("id", id)
  return { data, error }
}

// Hackathon registration functions
export const registerForHackathon = async (hackathonId: string, userId: string) => {
  try {
    const { data, error } = await supabase
      .from("hackathon_registrations")
      .insert([
        {
          hackathon_id: hackathonId,
          user_id: userId,
          registered_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Error registering for hackathon:", error)
      return { success: false, error: error.message }
    }

    // Update participant count
    const { error: updateError } = await supabase.rpc("increment_hackathon_participants", {
      hackathon_id: hackathonId,
    })

    if (updateError) {
      console.error("Error updating participant count:", updateError)
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in registerForHackathon:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export const checkHackathonRegistration = async (hackathonId: string, userId: string) => {
  try {
    const { data, error } = await supabase
      .from("hackathon_registrations")
      .select("*")
      .eq("hackathon_id", hackathonId)
      .eq("user_id", userId)
      .single()

    if (error && error.code !== "PGRST116") {
      console.error("Error checking registration:", error)
      return false
    }

    return !!data
  } catch (error) {
    console.error("Error in checkHackathonRegistration:", error)
    return false
  }
}

// Analytics functions for admin dashboard
export const getAnalytics = async () => {
  try {
    const [usersResult, hackathonsResult, jobsResult, coursesResult] = await Promise.all([
      supabase.from("users").select("id, created_at, role"),
      supabase.from("hackathons").select("id, status, participants_count"),
      supabase.from("jobs").select("id, status, posted_date"),
      supabase.from("courses").select("id, status, students_count"),
    ])

    return {
      users: usersResult.data || [],
      hackathons: hackathonsResult.data || [],
      jobs: jobsResult.data || [],
      courses: coursesResult.data || [],
    }
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return {
      users: [],
      hackathons: [],
      jobs: [],
      courses: [],
    }
  }
}

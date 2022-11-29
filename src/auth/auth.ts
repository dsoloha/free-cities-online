import { createClient } from '@supabase/supabase-js'
import { writable } from 'svelte/store'

const url = import.meta.env.VITE_PUBLIC_URL
const key = import.meta.env.VITE_PUBLIC_KEY

const supabase = createClient(url, key)
const userStore = writable(supabase.auth.getUser())

supabase.auth.onAuthStateChange((event, session) => {
	if (event === 'SIGNED_IN') {
		userStore.set(session?.user)
	} else if (event === 'SIGNED_OUT') {
		userStore.set(null)
	}
})

export default {
	get user() {
		return userStore
	},
	signIn(email: string, password: string) {
		return supabase.auth.signInWithPassword({ email, password })
	},
	signOut() {
		return supabase.auth.signOut()
	}
}

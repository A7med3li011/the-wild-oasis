
import { createClient } from '@supabase/supabase-js'
 const supabaseUrl = 'https://bbtrubynsmnuzkrriwgq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidHJ1Ynluc21udXprcnJpd2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzODI1NDgsImV4cCI6MjAzNjk1ODU0OH0.CfkFMVO28N9bd6Z7os9hYD7JBz36nIw_i_ms_NsKa1k'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


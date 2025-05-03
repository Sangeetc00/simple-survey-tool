import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SurveyProvider } from '@/context/SurveyContext'
import { AppLayout } from '@/components/layout/AppLayout'
import { Toaster } from 'sonner'
// import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Survey Tool',
  description: 'Create and share beautiful surveys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SurveyProvider>
            <AppLayout >
              {children}
            </AppLayout>
            <Toaster />
          </SurveyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
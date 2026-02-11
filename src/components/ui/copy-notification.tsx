"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CopyNotificationProps {
  message: string
  visible: boolean
  onDismiss: () => void
  duration?: number
}

export function CopyNotification({
  message,
  visible,
  onDismiss,
  duration = 3000,
}: CopyNotificationProps) {
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(onDismiss, duration)
    return () => clearTimeout(timer)
  }, [visible, onDismiss, duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div
            className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #833ab4 0%, #c13584 50%, #e1306c 100%)",
              boxShadow:
                "0 8px 30px rgba(193,53,132,0.4), 0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

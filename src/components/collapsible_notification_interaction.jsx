import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Notification,
  Message,
  MedalStar,
  Timer1,
  Tag,
  TickCircle,
  ArrowDown2,
  ArrowUp2,
} from "iconsax-react";

const notifications = [
  {
    icon: <Message size="24" className="text-gray-500" />,
    title: "New Message!",
    description: "Alex shared the project update.",
    time: "Just Now",
  },
  {
    icon: <MedalStar size="24" className="text-gray-500" />,
    title: "Level Up!",
    description: "You've reached Senior Developer...",
    time: "32 min ago",
  },
  {
    icon: <Timer1 size="24" className="text-gray-500" />,
    title: "Reminder: Code Review",
    description: "Frontend team code review in 15 min.",
    time: "1 hour ago",
  },
  {
    icon: <Tag size="24" className="text-gray-500" />,
    title: "Special Offer!",
    description: "Get 50% off on Indev/ui.",
    time: "7 hours ago",
  },
  {
    icon: <TickCircle size="24" className="text-gray-500" />,
    title: "Task Assigned!",
    description: "New feature implementation...",
    time: "10 Jan 2025",
  },
];

export function CollapsibleNotificationsInteraction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white border-2 border-gray-300 rounded-2xl p-6 overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Notification
              size={isOpen ? "28" : "40"}
              className="text-gray-400"
            />
            <h2 className="text-lg text-gray-400">5 New Notifications</h2>
          </div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-50 bg-gray-300 rounded-full p-2"
          >
            {isOpen ? <ArrowUp2 size="24" /> : <ArrowDown2 size="24" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              style={{ overflow: "hidden" }}
            >
              {notifications.map((notification, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
                    {notification.icon}
                  </div>

                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {notification.description}
                    </p>
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap">
                    {notification.time}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

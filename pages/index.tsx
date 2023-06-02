import Image from 'next/image'
import { Inter } from 'next/font/google'
import Message from '../components/Message.js'
import ChatBox from '../components/ChatBox.js'
import ChatRoom from '../components/ChatRoom.js'
import NavBar from '../components/NavBar.js'
import LoginPage from '../components/LoginPage.js'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const router = useRouter();
  // router.push("./LoginPage");
  return (
    <div className="bg-blue-500 py-10 h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-4">Welcome to ChatApp!</h1>
        <p className="text-lg text-center text-white mb-6">Connect with people around the world.</p>
        <LoginPage/>
      </div>
    </div>
  )
}

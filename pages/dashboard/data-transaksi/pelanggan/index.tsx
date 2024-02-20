import Layout from "@/components/dasboard/Layout"
import { FaUserFriends } from "react-icons/fa"

const pelanggan = () => {
  return (
    <>
      <Layout>
        <div className="ml-64">
          <div className="flex items-center pl-4 bg-gray-400 h-12 font-semibold text-lg">
            <div className="flex gap-2 items-center">
              <FaUserFriends />
              <h1 className="font-semibold">Pelanggan</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default pelanggan

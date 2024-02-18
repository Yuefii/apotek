import Layout from "@/components/dasboard/Layout";
import withAuth from "@/utils/withAuth";

const DashboardPages = () => {
  return (
    <>
      <Layout>
        <div className="ml-64">
          <div className="bg-gray-400 h-12 font-semibold text-2xl">
            {/* KONTEN */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(DashboardPages);

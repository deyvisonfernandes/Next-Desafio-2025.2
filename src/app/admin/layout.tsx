import AdminSidebar from "@/components/admin-sidebar";
import Footer from "@/components/footer";

export default function AdminLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <div>
        <AdminSidebar/>
        {children}
        <Footer />

    </div>
        
  );
}
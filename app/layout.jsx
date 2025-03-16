import "@/assets/styles/globals.css"

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find your dream rental property with us",
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout

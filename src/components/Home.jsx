import { Layout } from './Layout'
import { coffees } from '../data/coffees'


export const Home = () => {
    return (
        <Layout>
            <section className="bg-gradient-to-r from-[#D7A17F] to-[#F5E9DC] text-white py-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-red-950 text-4xl sm:text-5xl font-bold mb-4">Bienvenido a GranoStore</h1>
                    <p className="text-red-950 text-lg sm:text-xl font-medium">
                        Sabor que despierta tus sentidos, <br className="hidden sm:block" />
                        calidad en cada grano.
                    </p>
                </div>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {coffees.map((coffee) => (
                    <div
                        key={coffee.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 cursor-pointer transition-shadow">
                        <img
                            src={coffee.image}
                            alt={coffee.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2 text-gray-800">{coffee.name}</h2>
                            <p className="text-gray-600">{coffee.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

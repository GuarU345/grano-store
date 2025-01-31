import { Layout } from './Layout'

export const About = () => {
  return (
    <Layout>
      <div className='grid place-content-center'>
        <section className="w-[600px] bg-gray-100 py-12">
          <div className="px-6 lg:px-20">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-red-950 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                En <span className="font-semibold text-red-950">GranoStore</span> nos especializamos en ofrecer productos a granel de alta calidad,
                desde alimentos naturales y saludables hasta ingredientes esenciales para tu día a día.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Nuestro compromiso es brindarte opciones sostenibles, frescas y al alcance de todos, promoviendo
                un estilo de vida consciente y responsable con el medio ambiente.
              </p>
            </div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

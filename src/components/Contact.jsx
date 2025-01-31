import { Layout } from './Layout'

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <Layout>
      <div className='grid place-content-center'>
        <form onSubmit={handleSubmit} className="w-[400px] bg-[#f5f5dc] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-950 mb-6 text-center">Contactanos</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-beige-400 focus:border-transparent"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-beige-400 focus:border-transparent"
              placeholder="Ingresa un email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-beige-400 focus:border-transparent"
              placeholder="Deja tu mensaje"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-beige-600 text-red-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-400 focus:ring-offset-2"
          >
            Envianos tu mensaje
          </button>
        </form>
      </div>
    </Layout>
  )
}

import { getAllReviews } from "@/hooks/useGetReviews"

export default async function Testimonials() {

  const REVIEWS = await getAllReviews();

  return (
    <section className="section-container text-dark">
      <div className="section-header text-center mb-12">
        <h2 className="text-4xl font-semibold capitalize text-dark">What our clients say</h2>
      </div>
      <div className="section-content swiper">
        <div className="swiper-wrapper">
          {REVIEWS && REVIEWS.map(el => (
            <div key={crypto.randomUUID()} className="swiper-slide item p-8 rounded-2xl">
              <div className="info flex items-center">
                <img className="max-w-20 max-h-20 rounded-full mr-5 align-middle" src="img/explore-perfil.png" alt="Review profile image" />
                <div className="text-box">
                  <h3 className="name text-base capitalize font-semibold text-black">{el.user.username}</h3>
                  <span className="job text-light">{el.user.email}</span>
                </div>
              </div>
              <p className="comment mt-5 text-container">{el.comment}</p>
              <div className="rating">
                <div className="stars mt-4 text-sm text-yellow-500">****</div>
              </div>
            </div>
          ))}
          <div className="swiper-pagination relative mt-10 bottom-auto"></div>
        </div>
      </div>
    </section>
  )
}
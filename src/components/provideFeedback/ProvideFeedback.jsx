import { isProd } from 'src/config'
import { MessageIcon } from 'src/svgs'

const ProvideFeedback = () =>
  isProd ? null : (
    <section
      aria-label="Not for production"
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-red-500"
    >
      <div className="absolute left-0 right-0 top-1 flex w-full md:mx-auto">
        <a
          href="#"
          target="_blank"
          className="mx-auto border-8 border-double border-white bg-blue-500 p-3 font-[Verdana] text-base font-semibold text-white opacity-30 hover:opacity-100 focus:opacity-100 active:opacity-100"
          rel="noreferrer"
        >
          <span className="sr-only lg:not-sr-only">Provide Feedback</span>
          <MessageIcon aria-hidden="true" className="h-6 w-6 lg:hidden" />
        </a>
      </div>
    </section>
  )

export default ProvideFeedback

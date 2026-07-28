import Image from "next/image";

export function WhyOneEcosystemSection() {
  return (
    <section className="w-full bg-cream-alt px-5 py-10 lg:px-0 lg:py-14 lg:mt-18 lg:mb-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Content Row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6">
          <Image
            src="/images/Why One Ecosystem.png"
            alt=""
            width={972}
            height={1081}
            className="mx-auto h-40 w-40 shrink-0 object-contain sm:h-48 sm:w-48 lg:mx-0 lg:h-58 lg:w-58"
          />

          {/* Main Text */}
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[3px] text-text-accent">
              — Why One Ecosystem
            </p>
            <h2 className="mt-1 font-subheading text-2xl font-bold capitalize text-text-heading lg:pt-2">
              Wellness support today is fragmented by design.
            </h2>
            <p className="mt-3 text-sm leading-normal text-text-muted sm:text-[15px]">
              A child gets one kind of help in preschool, a different one in
              school, none in college unless they seek it out, and a generic
              EAP hotline once they join the workforce -each disconnected
              from the last, none of them built on real data about the
              person.
            </p>
            <p className="mt-3 text-sm leading-normal text-text-muted sm:text-[15px]">
              Mind A Lot is built as a continuum instead: the same underlying
              methodology. the same standard of care, following a person
              from their first classroom to their first job — so nothing
              about them has to be re-explained at every stage.
            </p>
          </div>

          {/* Quote Card */}
          <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center overflow-hidden rounded-[28px] bg-sage/30 px-7 pt-5 pb-6 text-center lg:mx-0 lg:text-left">
            <span className="font-serif text-4xl leading-none text-text-heading/40">
              &ldquo;
            </span>

            <p className="mt-1 font-serif text-xl font-bold leading-snug text-text-heading">
              Same care.
              Same standard.
              <br />
              Every stage.
              Every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

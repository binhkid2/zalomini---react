import { useId, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { CSSTransition } from "react-transition-group";
import {
  SfModal,
  SfButton,
  SfIconClose,
  useDisclosure,
} from "@storefront-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

export default function ModalTransition() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const headingId = useId();
  const descriptionId = useId();
  const modalRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <button
        onClick={open}
        aria-label="edit"
        type="button"
        className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
      >
        <FontAwesomeIcon icon={faPen} size="lg" />
        <span className="hidden ml-1.5 sm:block"> Edit </span>
      </button>

      <CSSTransition
        in={isOpen}
        nodeRef={backdropRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: "opacity-0",
          enterDone: "opacity-100 transition duration-200 ease-out",
          exitActive: "opacity-0 transition duration-200 ease-out",
        }}
      >
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-neutral-700 bg-opacity-50"
        />
      </CSSTransition>
      
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: "translate-y-10 opacity-0",
          enterDone:
            "translate-y-0 opacity-100 transition duration-200 ease-out",
          exitActive:
            "translate-y-10 opacity-0 transition duration-200 ease-out",
        }}
      >
        <SfModal
          open
          onClose={close}
          ref={modalRef}
          as="section"
          role="alertdialog"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
          className="max-w-[90%] md:max-w-lg"
          disableClickAway={true}
        >
          <header>
            <SfButton
              square
              variant="tertiary"
              className="absolute right-2 top-2"
              onClick={close}
            >
              <SfIconClose />
            </SfButton>
            <h3
              id={headingId}
              className="font-bold typography-headline-4 md:typography-headline-3"
            >
              You might miss out on great deals
            </h3>
          </header>
          <p id={descriptionId} className="mt-2">
            There are special offers for some of the items on your wishlist. Do
            you want to see these deals before proceeding to checkout page?
          </p>
          <footer className="flex justify-end gap-4 mt-4">
            <SfButton variant="secondary" onClick={close}>
              Skip
            </SfButton>
            <SfButton onClick={close}>Yes!</SfButton>
          </footer>
        </SfModal>
      </CSSTransition>
    </>
  );
}

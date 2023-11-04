import { ReactComponent as Close } from "../icons/close.svg"
import { useEffect, useRef, useState } from "react"
import styles from "./Modal.module.scss"

const Modal = ({ children, onClose, isModal, className, showCloseButton = false, leftCloseIcon = false, disableCloseHover, closeColor, width }) => {
  // for closing on outside click
  const modalRef = useRef(null)
  const closeRef = useRef()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isModal) {
      setShowModal(true)
    }
  }, [isModal])

  useEffect(() => {
    if (closeRef && showModal) {
      closeRef.current.focus()
    }
  }, [closeRef, showModal])

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose()
    }
  }
  const onAnimationEnd = () => {
    if (!isModal) setShowModal(false)
  }

  return (
    showModal && (
      <div className={`${styles.modalOverlay} ${isModal && styles.open}`} style={{ width: width ? width : "100%" }} ref={closeRef} onKeyDown={handleKeyDown} tabIndex={-1}>
        <div className={`${styles.modalBox} ${isModal ? styles.open : styles.close} ${className}`} onAnimationEnd={onAnimationEnd} ref={modalRef}>
          {showCloseButton && (
            <button className={`${styles.closeIcon} ${leftCloseIcon ? styles.leftClose : ""} ${disableCloseHover ? styles.closeHoverless : ""}`} onClick={onClose}>
              <Close color={closeColor ?? "#094360"} />
            </button>
          )}
          {children}
        </div>
      </div>
    )
  )
}

export default Modal

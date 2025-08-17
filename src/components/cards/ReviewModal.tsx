import { createPortal } from "react-dom"
import { useRef, useState } from "react"
import { db } from "../../firebaseConfig"
import { push, ref, set } from "firebase/database"
import StarRating from "../Forms/StarsInput"
import FormInput from "../Forms/FormInput"
import { ImageIcon } from "../icons/ImgIcon"
import FormTextarea from "../Forms/FormTextarea"

type ReviewModalProps = {
  closeModal: () => void
  onSuccess: () => void
}  


function ReviewModal({ closeModal, onSuccess }: ReviewModalProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [imageUrl, setImageUrl] = useState("")
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const imgRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [rate, setRating] = useState<number>(0)


  const handleImageUpload = async (file: File, cb: (url: string) => void) => {
    setUploading(true)
    const formData = new FormData()
    formData.append("image", file)

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=edeee7c6c2851a590946b20e9ce00b5d`,
      { method: "POST", body: formData }
    )

    const data = await res.json()
    if (data?.success) cb(data.data.url)
    setUploading(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file, (url) => setImageUrl(url))
    } else {
      setErrors((prev) => ({ ...prev, image: "Only valid image formats are allowed" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value.trim() || ""

    const data = {
      name: get("name"),
      location: get("location"),
      subject: get("subject"),
      review: get("review"),
      clientImage: imageUrl,
      rate: rate,
      show: false,
    }

    const newErrors: { [key: string]: string } = {}
    if (!data.name) newErrors.name = "Name is required"
    if (!data.location) newErrors.location = "Location is required"
    if (!data.subject) newErrors.subject = "Subject is required"
    if (!data.review) newErrors.review = "Review is required"
    if (!data.clientImage) newErrors.image = "Image is required"
    if (rate === 0) newErrors.rate = "Rating is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const newRef = push(ref(db, "testimonials"))
      await set(newRef, data)
      form.reset()
      setImageUrl("")
      closeModal()
      onSuccess()

    } catch (err) {
      console.error("Submit error:", err)
    } finally {
      setLoading(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
      onClick={closeModal}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative w-full max-w-3xl bg-white dark:bg-black/70 rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-500 hover:text-white text-gray-600 dark:text-gray-300 transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
          Share Your Review
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="flex flex-col gap-5">
            <FormInput
              label="Subject"
              name="subject"
              placeholder="Enter brief subject"
              error={errors.subject}
              className="rounded-lg border-gray-300 dark:border-gray-700"
            />
            <FormTextarea
              label="Description"
              name="review"
              error={errors.review}
              className="rounded-lg border-gray-300 dark:border-gray-700"
            />

            <div>
              <label className="font-semibold text-gray-900 dark:text-gray-200 mb-2 block">
                Your Rating
              </label>
              <StarRating value={rate} onChange={setRating} />
              {errors.rate && (
                <p className="text-red-600 text-xs mt-1">{errors.rate}</p>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5">
            <div>
              <label className="mb-2 block text-base font-semibold dark:text-gray-200 text-gray-900">
                Your Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={imgRef}
                onChange={handleImageChange}
              />
              <div
                className="w-[200px] h-[140px] rounded-xl border-2 border-dashed border-purple-400 cursor-pointer flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                onClick={() => imgRef.current?.click()}
              >
                {uploading ? (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Uploading...
                  </p>
                ) : imageUrl ? (
                  <img
                    src={imageUrl}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <ImageIcon />
                )}
              </div>
              {errors.image && (
                <p className="text-red-600 text-xs mt-1">{errors.image}</p>
              )}
            </div>

            <FormInput
              label="Your Name"
              name="name"
              placeholder="Enter your name"
              error={errors.name}
              className="rounded-lg border-gray-300 dark:border-gray-700"
            />
            <FormInput
              label="Region"
              name="location"
              placeholder="Enter your location"
              error={errors.location}
              className="rounded-lg border-gray-300 dark:border-gray-700"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-60 px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>

      </form>
    </div>,
    document.body
  )
}

export default ReviewModal

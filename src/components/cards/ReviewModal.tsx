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
  setAlertMessage: React.Dispatch<React.SetStateAction<string | null>>
}

function ReviewModal({ closeModal, setAlertMessage }: ReviewModalProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [imageUrl, setImageUrl] = useState("")
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const imgRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [rate, setRating] = useState<number>(0)

  const handleImageUpload = async (
    file: File,
    cb: (url: string) => void,
    setUploading: (v: boolean) => void
  ) => {
    setUploading(true)
    const formData = new FormData()
    formData.append("image", file)

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=edeee7c6c2851a590946b20e9ce00b5d`,
      {
        method: "POST",
        body: formData,
      }
    )

    const data = await res.json()
    if (data?.success) {
      cb(data.data.url)
    }
    setUploading(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file, (url) => setImageUrl(url), setUploading)
    } else {
      setErrors((prev) => ({
        ...prev,
        image: "Only valid image formats are allowed",
      }))
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
      setAlertMessage("✅ Review submitted!")
      form.reset()
      setImageUrl("")
      closeModal()
    } catch (err) {
      setAlertMessage("❌ Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return createPortal(
    <div
      className="fixed h-screen z-50 inset-0 bg-gray08/50 dark:bg-gray08/10 backdrop-blur-sm flex justify-center items-start md:items-center overflow-y-auto px-4"
      onClick={closeModal}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative modal_content rounded-2xl border border-purple60 bg-[#f4edff] dark:bg-gray15/95 backdrop-blur-xl my-8
        p-6 w-full max-w-[850px] h-max overflow-y-auto flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-start text-black dark:text-white">
          Add Your Review
        </h2>

        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-5 flex-1">
            <FormInput
              label="Subject"
              name="subject"
              placeholder="Enter brief subject"
              error={errors.subject}
              className="border border-purple60"
            />

            <FormTextarea
              label="Description"
              name="review"
              error={errors.review}
              className="w-full p-2"
            />

            <div>
              <label className="font-semibold text-black dark:text-white mb-1 block">
                Your Rating
              </label>
              <StarRating value={rate} onChange={setRating} />
              {errors.rate && (
                <p className="text-red-600 text-xs mt-1">{errors.rate}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            <div>
              <label className="mb-2 block text-base font-semibold dark:text-white text-black">
                Your Image:
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={imgRef}
                onChange={handleImageChange}
              />
              <div
                className="w-full max-w-[200px] h-[140px] rounded-lg border border-purple60 cursor-pointer flex items-center justify-center overflow-hidden"
                onClick={() => imgRef.current?.click()}
              >
                {uploading ? (
                  <p className="text-sm">Uploading...</p>
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
              className="border border-purple60"
            />

            <FormInput
              label="Region"
              name="location"
              placeholder="Enter your location"
              error={errors.location}
              className="border border-purple60"
            />
          </div>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            disabled={loading}
            className="bg-purple60 rounded-lg px-6 py-2 text-white font-medium cursor-pointer hover:bg-purple70 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>,
    document.body
  )
}

export default ReviewModal

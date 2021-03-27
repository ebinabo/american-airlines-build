interface InputField {
    label: string
    icon?: string
    placeholder: string
    options?: string[]
    type: "text" | "date" | "select"
}

const inputFields: InputField[] = [
    { label: "From", type: "text", placeholder: "City or airport" },
    { label: "To", type: "text", placeholder: "City or airport" },
    {
        label: "No of Passengers",
        type: "select",
        placeholder: "1",
        options: ["1", "2", "3", "4", "5"],
    },
    {
        label: "Class",
        type: "select",
        placeholder: "Economy",
        options: ["Economy", "Business", "First Class"],
    },
    {
        label: "Depature Date",
        type: "date",
        placeholder: "dd/mm/yyyy",
    },
    {
        label: "Return Date",
        type: "date",
        placeholder: "dd/mm/yyyy",
    },
]

const tabs: { icon: string; label: string }[] = [
    {
        icon:
            "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.12759 14.9904L5.12759 12.9904C5.12759 11.8858 5.89681 10.532 6.84569 9.96657L11 7.4911V2.99036C11 2.43807 11.4477 1.99036 12 1.99036C12.5523 1.99036 13 2.43807 13 2.99036V7.58623L17.1543 10.0617C18.1032 10.6271 18.8724 11.9809 18.8724 13.0855V15.0855L13 11.5862L13 18.5752L15.4529 20.0097V22.0097L12 19.9904L11.967 19.9904L8.54711 21.9904V19.9904L11 18.5559L11 11.4911L5.12759 14.9904Z' fill='%230078D2'/%3E%3C/svg%3E%0A",
        label: "Book Flight",
    },
    {
        icon:
            "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.897 21.968C12.366 21.9696 11.8564 21.7586 11.482 21.382L3.64799 13.547C3.23458 13.1348 3.0226 12.5621 3.06799 11.98L3.56799 5.41401C3.63929 4.4264 4.42619 3.64163 5.41399 3.57301L11.98 3.07301C12.031 3.06201 12.083 3.06201 12.134 3.06201C12.6638 3.06337 13.1717 3.27399 13.547 3.64801L21.382 11.482C21.7572 11.8571 21.9681 12.3659 21.9681 12.8965C21.9681 13.4271 21.7572 13.9359 21.382 14.311L14.311 21.382C13.9368 21.7583 13.4277 21.9693 12.897 21.968ZM12.133 5.06201L5.56199 5.56201L5.06199 12.133L12.897 19.968L19.967 12.898L12.133 5.06201ZM8.65399 10.654C7.69983 10.6542 6.87841 9.98037 6.69207 9.04458C6.50574 8.10879 7.0064 7.17169 7.88786 6.80639C8.76933 6.44109 9.78609 6.74933 10.3163 7.54259C10.8466 8.33586 10.7426 9.39322 10.068 10.068C9.69382 10.4443 9.18467 10.6553 8.65399 10.654Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A",
        label: "Manage Trips/Check-in",
    },
    {
        icon:
            "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 7H11V12H16V14H9V7Z' fill='%234F4F4F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z' fill='%234F4F4F'/%3E%3C/svg%3E%0A",
        label: "Flight Status",
    },
]

export default function BookingSection() {
    return (
        <form className="container mx-auto px-6">
            <div className="border rounded-xl shadow-lg -mt-12 py-8 relative bg-white">
                {/* Tabs */}
                <div className="border-b">
                    <div className="flex justify-around px-8">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.label}
                                className=" relative flex pb-2"
                                // className={`flex flex-1 pb-2 text-center ${
                                //     index
                                //         ? "border-none"
                                //         : "border-b-2 border-blue-500"
                                // }`}
                            >
                                {!index ? (
                                    <span className="absolute bottom-0 h-0.5 w-full bg-blue-500" />
                                ) : null}
                                <img src={tab.icon} alt={tab.label} />
                                <p>{tab.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-8">
                    {/* Radio Group */}
                    <div className="mt-6 flex justify-around">
                        {["Round trip", "One way", "Redeem miles"].map(
                            option => (
                                <div
                                    className="flex items-center space-x-2"
                                    key={option}
                                >
                                    <input
                                        type="radio"
                                        name="trip-type"
                                        id=""
                                    />
                                    <label htmlFor="">{option}</label>
                                </div>
                            )
                        )}
                    </div>

                    {/* Form Group */}
                    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-8">
                        {inputFields.map(field => (
                            <div key={field.label}>
                                <label htmlFor="">{field.label}</label>
                                {field.type === "select" ? (
                                    <select
                                        placeholder={field.placeholder}
                                        className="block w-full mt-4 rounded-md"
                                        name=""
                                        id=""
                                    >
                                        {field.options.map(option => (
                                            <option key={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        className="block w-full mt-4 rounded-md"
                                        type={field.type}
                                        placeholder={field.placeholder}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <button className="block mx-auto mt-14 bg-blue-500 uppercase text-white">
                    Book Flight
                </button>
            </div>
        </form>
    )
}

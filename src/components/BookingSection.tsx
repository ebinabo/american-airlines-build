interface InputField {
    label: string
    icon?: string
    placeholder: string
    options?: string[]
    type: "text" | "date" | "select"
}

const inputFields: InputField[] = [
    {
        label: "From",
        type: "text",
        placeholder: "City or airport",
        icon:
            "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.4326C20.7628 11.2941 20.542 6.75344 17.6569 3.86826C14.5327 0.744067 9.46734 0.744067 6.34315 3.86826C3.21895 6.99246 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8594 16.9351 15.8744 16.9497 15.8891L21.1924 20.1317C21.5829 20.5222 22.2161 20.5222 22.6066 20.1317C22.9971 19.7412 22.9971 19.108 22.6066 18.7175L18.364 14.4749C18.3493 14.4602 18.3343 14.4461 18.319 14.4326ZM16.2426 5.28248C18.5858 7.62562 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62562 7.75736 5.28248C10.1005 2.93933 13.8995 2.93933 16.2426 5.28248Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A",
    },
    {
        label: "To",
        type: "text",
        placeholder: "City or airport",
        icon:
            "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.4326C20.7628 11.2941 20.542 6.75344 17.6569 3.86826C14.5327 0.744067 9.46734 0.744067 6.34315 3.86826C3.21895 6.99246 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8594 16.9351 15.8744 16.9497 15.8891L21.1924 20.1317C21.5829 20.5222 22.2161 20.5222 22.6066 20.1317C22.9971 19.7412 22.9971 19.108 22.6066 18.7175L18.364 14.4749C18.3493 14.4602 18.3343 14.4461 18.319 14.4326ZM16.2426 5.28248C18.5858 7.62562 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62562 7.75736 5.28248C10.1005 2.93933 13.8995 2.93933 16.2426 5.28248Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A",
    },
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
            <div className="border rounded-xl shadow-lg -mt-20 md:-mt-12 py-8 relative bg-white">
                {/* Tabs */}
                <div className="border-b">
                    <div className="flex justify-around px-8">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.label}
                                className={`${
                                    index
                                        ? " hidden sm:flex"
                                        : "flex flex-1 justify-center sm:flex-none sm:justify-start"
                                } relative pb-2`}
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
                    <div className="mt-6 md:flex justify-around hidden">
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

                    <div className="mt-6 block md:hidden">
                        <label htmlFor="">Trip Type</label>
                        <select
                            className="mt-4 w-full rounded-md"
                            name=""
                            id=""
                        >
                            {["Round trip", "One way", "Redeem miles"].map(
                                option => (
                                    <option
                                        className="flex items-center space-x-2"
                                        key={option}
                                    >
                                        {option}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    {/* Form Group */}
                    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
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
                                    <div className="relative flex items-center">
                                        <input
                                            className={`${
                                                field.icon ? "pl-8" : ""
                                            } block w-full mt-4 rounded-md border-gray-700`}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                        />
                                        <img
                                            className="absolute mt-4 ml-1"
                                            src={field.icon}
                                            alt=""
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-8">
                    <button className="block w-full md:w-auto mx-auto mt-14 px-8 py-4 rounded-md font-bold tracking-wide bg-blue-500 uppercase text-white">
                        Book Flight
                    </button>
                </div>
            </div>
        </form>
    )
}

export default function YesNoButton() {
    return (
        <>
            <div className="flex flex-row">
                <button class="mr-10 bg-indigo-500 hover:bg-indigo-400 py-2 px-12 rounded">
                    Yes
                </button>

                <button class="mr-10 bg-amber-700 hover:bg-amber-600 py-2 px-10 rounded">No</button>
            </div>
        </>
    )
}

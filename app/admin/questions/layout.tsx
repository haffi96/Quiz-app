import QuestionSidebar from "../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../Routes";
import { getQuestions } from "../../../helpers/supabase-helpers"

export default async function AdminPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const allQuestions = await getQuestions();
    if (allQuestions) {
        return (
            <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
                <QuestionSidebar allQuestions={allQuestions} route={Routes.ADMIN_EDIT} />
                {children}
            </section>
        )
    } else {
        <>
            Failed to fetch all questions...
        </>
    }
}

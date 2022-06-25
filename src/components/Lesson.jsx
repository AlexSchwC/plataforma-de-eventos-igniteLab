import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

export function Lesson({ title, slug, availableAt, type }) {
    const isLessonAvailable = isPast(availableAt);
    const availableDateFormatted = format(availableAt, "EEEE' • 'd ' de 'MMMM' • 'k'h'mm", {locale: ptBR})

    const params = useParams()

    const isActiveLesson = slug === params.slug;

    console.log(isActiveLesson)

    return (
        <Link to={`/event/lesson/${slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div 
                className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors 
                ${isActiveLesson ? 'bg-green-500' : ''}`}
            >
                <header className="flex items-center justify-between">
                   {
                    isLessonAvailable ? (
                        <span className={`flex items-center gap-2 text-sm font-medium ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )
                   }

                    <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300">
                        {type === 'live' ? 'AO VIVO' : 'Aula Prática'}
                    </span>
                </header>
                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`} >
                    {title}
                </strong>
            </div>
        </Link>
    )
}
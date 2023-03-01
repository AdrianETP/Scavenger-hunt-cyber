import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Stand from './Components/Stand'

function App() {
    type Stand = {
        title: string,
        complete: boolean,
        index: number,
    }
    const [stands, setStands] = useState<Stand[]>([
        {
            title: "Registro",
            complete: false,
            index: 0,
        },
        {
            title: "Stand 1",
            complete: false,
            index: 1,
        },
        {
            title: "Stand 2",
            complete: false,
            index: 2,
        },
        {
            title: "Stand 3",
            complete: false,
            index: 3,
        },
        {
            title: "Stand 4",
            complete: false,
            index: 4,
        },
    ])

    const [pass, setPass] = useState<string>("")

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)

    const Complete = (index: number) => {
        setIndex(index)
        setIsOpen(true);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (pass == "H4ck3r4l1f3") {
            setIsOpen(false)
            let data = [...stands]
            data[index].complete = !data[index].complete
            setStands(data);
            setPass("")
        }
        else {
            alert("Error: contraseña Incorrecta")
            setPass("")
        }
    }

    return (
        <main>
            <div className='bg-accent text-accent-content text-center py-5 text-xl mb-10'>
                <h2>Scavanger hunt progress</h2>

            </div>
            {
                stands.map(e => (
                    <Stand key={e.index} title={e.title} complete={e.complete} index={e.index} Complete={Complete} />
                ))
            }
            <div className={`fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-900 transition-all duration-300 z-10 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-lg rounded-lg p-8 bg-accent-focus min-w-[50vw]">
                    <h1 className='text-accent-content text-center pb-3 text-xl'>Cual es la contraseña</h1>
                    <form onSubmit={e => handleSubmit(e)} className="w-full flex flex-col items-center space-y-3">
                        <input className='input' type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                        <div className='flex space-x-2'>
                            <button className='btn' type='submit'>Subir</button>
                            <button className='btn btn-error' onClick={(e) => { e.preventDefault(); setIsOpen(false) }}>cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default App

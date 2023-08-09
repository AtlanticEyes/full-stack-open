import Part from './Part'

const Content = (props) => {
    const text = props.text
    return (
        <div>
            {text.map((texts, index) => 
                <Part key = {index} part = {texts.part} exercises = {texts.exercises} />
            )}  
        </div>
    )
}

export default Content
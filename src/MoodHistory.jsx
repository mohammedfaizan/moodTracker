
import MoodItem from "./MoodItem"

export default function MoodHistory({ moodHistory }) {
    
    return (
        <div className="moodHistory">
            <h3>This is mood history </h3>
            { moodHistory && moodHistory.map((item, index) => (
                    <MoodItem key={index} mood={item[0]} note={item[1]} />
                ))
            }
        </div>
    )
}
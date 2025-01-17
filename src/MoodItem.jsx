export default function MoodItem({mood, note}) {
    return (
        <div className="moodItem">{`${mood}: ${note}`}</div>
    )
}
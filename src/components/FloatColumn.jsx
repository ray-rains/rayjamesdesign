export default function FloatColumn() {
  const rects = [
  { width: 4, height: 180, left: 0, delay: 0, duration: 34 },
    { width: 4, height: 240, left: 12, delay: 0, duration: 36 },
    { width: 6, height: 480, left: 28, delay: 0, duration: 35 },
    { width: 4, height: 120, left: 44, delay: 0, duration: 30 },
  { width: 50, height: 80, left: 60, delay: 0, duration: 54 },
  { width: 8, height: 210, left: 80, delay: 0, duration: 42 },
  { width: 60, height: 40, left: 90, delay: 0, duration: 66 },
    { width: 60, height: 10, left: 90, delay: 0, duration: 66 },
  { width: 60, height: 4, left: 90, delay: 0, duration: 66 },


]
  return (
    <div className="float-column">
      {rects.map((rect, i) => (
        <div
          key={i}
          className="float-rect"
            style={{
            '--x': `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            animationDuration: `${rect.duration}s`,
            animationDelay: `${rect.delay}s`,
            }}
        />
      ))}
    </div>
  )
}
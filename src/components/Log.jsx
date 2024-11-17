export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => {
        return (
          <li key={i}>
            {turn.player} selected [{turn.square.row + 1}, {turn.square.col + 1}
            ]
          </li>
        );
      })}
    </ol>
  );
}

export function RepositoryItem(props) {
  return (
    <li>
      {/* Verificando se possui algo dentro da prop repository e se nao tiver coloca Default */}
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  );
}

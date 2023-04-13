import './index.css'

const EachHistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteClick = () => {
    deleteHistory(id)
  }
  return (
    <li className="listItem">
      <div className="listItemContainer">
        <p className="timeCSS">{timeAccessed}</p>
        <div className="imageTitleUrlContainer">
          <img src={logoUrl} alt="domain logo" className="logoAlter" />
          <p className="titleCSS">{title}</p>
          <p className="urlCSS">{domainUrl}</p>
        </div>
        <button
          onClick={onDeleteClick}
          type="button"
          className="deleteBtn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteCSS"
          />
        </button>
      </div>
    </li>
  )
}

export default EachHistoryItem

import { Link } from "react-router-dom"

const PageTitle = ({ title, iconHref }) => {
  return (
    <div className="mb-5 text-center">
      <h2 className="fw-normal">
        {title}
        {iconHref && <Link to={iconHref} className="btn btn-primary fw-bold shadow ms-3 p-0 px-2" >
          <i className={'bi bi-plus fw-bold fs-4'}></i>
        </Link>}
      </h2>
    </div>
  )
}

export default PageTitle
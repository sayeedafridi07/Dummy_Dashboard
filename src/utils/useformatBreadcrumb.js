import { Link } from "react-router-dom";

const useformatBreadcrumb = (path) => {
    const pathSegments = path.split('/');
    const breadcrumbSegments = pathSegments.map((segment, index) => {
        const breadcrumb = {
            label: segment,
            path: pathSegments.slice(0, index + 1).join('/'),
        };
        return breadcrumb;
    });

    return (
        <ul className="flex items-center justify-start gap-2">
            {
                breadcrumbSegments.map((breadcrumb, index) => (
                    <li key={index} className="flex items-center justify-start gap-1">
                        <Link to={breadcrumb.path} className="">
                            {breadcrumb.label
                                .replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function (str) { return str.toUpperCase(); })}

                        </Link>
                        {(index !== breadcrumbSegments.length - 1 && index !== 0) && <span>/</span>}
                    </li>
                ))
            }
        </ul>
    );
}

export default useformatBreadcrumb;
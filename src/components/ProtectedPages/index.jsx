import { Navigate, Outlet } from "react-router-dom"
import { fromUnixTime, isAfter } from "date-fns"
import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { decodeHash, removeToken } from "../../utils/script"

export const ProtectedPages = ({
    elementProps,
    element: Element,
    validadePage = true,
    redirectTo = "/login"
}) => {
    const profileData = decodeHash()
    const {
        profile_data,
        onSetCurrentUser,
        onRemoveCurrentUser,
    } = useAuth()

    useEffect(() => {
        if (!profile_data && profileData) {
            onSetCurrentUser(profileData);
        }
    }, [profileData]);

    if (validadePage) {
        if (!profileData) {
            removeToken();
            onRemoveCurrentUser();
            return <Navigate to={redirectTo} />;
        }

        if (isAfter(new Date(), fromUnixTime(profileData.exp))) {
            removeToken();
            onRemoveCurrentUser();
            return <Navigate to={redirectTo} />;
        }
    }

    if (Element) {
        return <Element {...(elementProps || {})} />;
    }

    return <Outlet />;
}
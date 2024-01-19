import NavItem from "./NavItem";

const NavRoutes = () => {
    return (
        <div>
            <ul className="flex flex-row space-x-5">
                <NavItem route={"Authors"} />
                <NavItem route={"Books"} />
                <NavItem route={"Collections"} />
                <NavItem route={"Publishers"} />
            </ul>
        </div>
    );
};

export default NavRoutes;
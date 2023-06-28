// import {
//     AdminUsersTableTBody,
//     AdminUsersTableTd,
//     AdminUsersTableTh,
//     AdminUsersTableTr,
//     AdminUsersTabletTHead,
//     AdminUsersTableWrapper
// } from "./AdminUsersTable.styled.js";
import {IconEdit} from "../../../svgs/IconEdit.jsx";
import {Link} from "react-router-dom";
import {IconTrash} from "../../../svgs/IconTrash.jsx";
import PropTypes from "prop-types";
import {MenuItem, FormControl, Select} from '@mui/material';
import {usePutUserRol} from "../../../../Hooks/Users/usePutUserRol.jsx";
import {useGlobalState} from "../../../../Context/Context.jsx";
import {
    AdminTableSubWrapper,
    AdminTableTag, AdminTableTBody, AdminTableTd, AdminTableTh, AdminTableTr, AdminTabletTHead, AdminTableWrapper
} from "../AdminProductsTable/AdminTable.styled.js";

export const AdminUsersTable = ({data, setReloadUsers}) => {
    const [handlePutUserRol] = usePutUserRol()
    const {auth} = useGlobalState()
    // function toggleAll(source) {
    //     const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    //     checkboxes.forEach(checkbox => {
    //         checkbox.checked = source.checked;
    //     });
    // }

    return (
        <AdminTableWrapper>
            <AdminTableSubWrapper>
                <AdminTableTag>
                    <AdminTabletTHead bgColor={"#58C1CE"}>
                        <AdminTableTr
                            background={'#58C1CE'}
                        >
                            <AdminTableTh
                                color={'#fff'}
                                width="max-content"
                                justify='center'
                            >
                                <input type="checkbox" /*onClick={toggleAll(this)}*/ />
                                <span className="selectAllLabel"></span>
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="10.8rem"
                            >
                                Nombre
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="15.1rem"
                            >

                                Apellido
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="8.9rem"
                            >
                                Email
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="13rem"
                            >
                                Estado
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="13rem"
                            >
                                Rol Actual
                            </AdminTableTh>

                            <AdminTableTh
                                color={'#fff'}
                                width="12.4rem"
                                justify='center'
                            >
                                Actions
                            </AdminTableTh>

                        </AdminTableTr>
                    </AdminTabletTHead>
                    <AdminTableTBody>
                        {
                            data && data.length !== 0 && data.map((row) => {
                                return (
                                    <AdminTableTr key={row.id}>
                                        <AdminTableTd
                                            width="max-content"
                                            justify='center'
                                        ><input type="checkbox"/>
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="10.8rem"
                                        >
                                            {row.username}
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="15.1rem"
                                        >
                                            {row.lastname}
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="8.9rem"
                                        >
                                            {row.email}
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="13rem"
                                        >
                                            Active
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="13rem"
                                        >
                                            <FormControl variant="standard">
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={row.rol}
                                                    onChange={() => {
                                                        setReloadUsers(true)
                                                        handlePutUserRol(row.id, setReloadUsers)
                                                    }}
                                                    disabled={auth && row.id === auth.id || row.id === 1}
                                                    label="Rol"
                                                    sx={{fontSize: '14px'}}
                                                >
                                                    <MenuItem disabled={row.rol === 'ADMIN'} value='ADMIN'
                                                              sx={{fontSize: '14px'}}>Admin</MenuItem>
                                                    <MenuItem disabled={row.rol === 'USER'} value='USER'
                                                              sx={{fontSize: '14px'}}>Client</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="12.4rem"
                                            justify='center'
                                        >
                                            <Link
                                                to='/admin/'
                                            >
                                                <IconEdit
                                                    color={"#F2A63B"}
                                                />
                                            </Link>
                                            <Link
                                                to='/admin/'
                                            >
                                                <IconTrash
                                                    color={"#E72328"}
                                                />
                                            </Link>
                                        </AdminTableTd>
                                    </AdminTableTr>
                                )
                            })
                        }
                    </AdminTableTBody>
                </AdminTableTag>
            </AdminTableSubWrapper>
        </AdminTableWrapper>
    )
}

AdminUsersTable.propTypes = {
    api: PropTypes.array,
};
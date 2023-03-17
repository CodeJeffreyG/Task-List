import React from "react";
import "./alltasks.scss";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { border } from "@mui/system";

const Alltasks = () => {
  const table = [
    {
      id: 1,
      first_name: "Raye",
      last_name: "Trembley",
      email: "rtrembley0@pbs.org",
      gender: "Female",
      ip_address: "161.226.198.151",
    },
    {
      id: 2,
      first_name: "Basile",
      last_name: "Rangall",
      email: "brangall1@paypal.com",
      gender: "Male",
      ip_address: "230.84.246.142",
    },
    {
      id: 3,
      first_name: "Licha",
      last_name: "Trenbey",
      email: "ltrenbey2@networksolutions.com",
      gender: "Female",
      ip_address: "85.169.130.70",
    },
    {
      id: 4,
      first_name: "Micaela",
      last_name: "Hentze",
      email: "mhentze3@liveinternet.ru",
      gender: "Female",
      ip_address: "172.244.95.115",
    },
    {
      id: 5,
      first_name: "Wilfrid",
      last_name: "Taylour",
      email: "wtaylour4@youku.com",
      gender: "Male",
      ip_address: "127.1.179.235",
    },
    {
      id: 6,
      first_name: "Zitella",
      last_name: "Gough",
      email: "zgough5@hostgator.com",
      gender: "Female",
      ip_address: "123.13.68.204",
    },
    {
      id: 7,
      first_name: "Fey",
      last_name: "Peltz",
      email: "fpeltz6@tmall.com",
      gender: "Female",
      ip_address: "176.14.125.81",
    },
    {
      id: 8,
      first_name: "Sidoney",
      last_name: "Riddett",
      email: "sriddett7@cornell.edu",
      gender: "Female",
      ip_address: "164.75.5.182",
    },
    {
      id: 9,
      first_name: "Murray",
      last_name: "Ruslin",
      email: "mruslin8@a8.net",
      gender: "Male",
      ip_address: "31.215.13.243",
    },
    {
      id: 10,
      first_name: "Garald",
      last_name: "Ivetts",
      email: "givetts9@statcounter.com",
      gender: "Male",
      ip_address: "250.59.30.154",
    },
  ];

  const tableContainerSX = {
    position: "absolute",
    width: "100%",
    maxHeight: "100vh",
    border: "1px solid #0E8388",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    borderRadius: 2,
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper} sx={tableContainerSX}>
        <Table stickyHeader={true}>
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fist Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          {/* body */}
          <TableBody>
            {table.map((row) => (
              <TableRow id={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Alltasks;

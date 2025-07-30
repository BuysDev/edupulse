'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "./table";

export function FaultTable() {
    return (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">Faltas e Atrasos</h2>
                <p className="text-sm text-gray-500">Registro de ausências e atrasos</p>
            </div>

            <div className="p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Justificado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>01/01/2023</TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    Atraso
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Sim
                                </span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>02/01/2023</TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Falta
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    Não
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
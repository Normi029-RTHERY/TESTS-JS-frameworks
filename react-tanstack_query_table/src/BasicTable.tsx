import * as React from 'react';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, SortingState } from '@tanstack/react-table'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';


export default function BasicTable({ ...props }) {

    const data = React.useMemo(() => props.db, [])

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
        }, {
            header: "Nom",
            accessorKey: "name",
        }, {
            header: "Numéro",
            accessorKey: "number",
        }, {
            header: "Emplacement",
            accessorKey: "building_id",
        }, {
            header: "Étage",
            accessorKey: "floor",
        }, {
            header: "Direction",
            accessorKey: "direction",
        }, {
            header: "Capacité",
            accessorKey: "capacity",
        }
    ]

    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting: sorting,
        },
        debugTable: true,
    })




    return (
        <div className='basic-table'>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup =>
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header =>
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null :
                                        <div style={{ display: 'flex', gap: '.5rem' }}{...{
                                            className: header.column.getCanSort()
                                                ? 'cursor-pointer select-none'
                                                : ' ',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {
                                                <div style={{ width: '24px', maxHeight: '24px' }}>
                                                    {{
                                                        asc: <KeyboardArrowUp />,
                                                        desc: <KeyboardArrowDown />
                                                    }
                                                    [header.column.getIsSorted() as string] ?? null}
                                                </div>
                                            }
                                        </div>
                                    }
                                </th>
                            )}
                        </tr>
                    )}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row =>
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell =>
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
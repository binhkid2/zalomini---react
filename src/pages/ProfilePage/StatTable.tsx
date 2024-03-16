

import { FC } from "react";


export const StatTable: FC = () => {

  return (
    <>
    
    <div className=" border mx-2 md:mx-10 mb-32 mt-5">
        <b className="flex justify-center items-center text-center">Credit Price</b>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
               
                    <tr>
                        <td>1</td>
                        <td>row.name</td>
                        <td>bbbb</td>
                        <td>123424</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>row.name</td>
                        <td>bbbb</td>
                        <td>123424</td>
                    </tr>


                    <tr>
                        <td>1</td>
                        <td>row.name</td>
                        <td>bbbb</td>
                        <td>123424</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>row.name</td>
                        <td>bbbb</td>
                        <td>123424</td>
                    </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={3}>Calculated Total Weight</th>
                    <td>123123</td>
                </tr>
            </tfoot>
        </table>
    </div>
    </>
  );
};





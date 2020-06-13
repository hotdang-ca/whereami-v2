import dotenv from "dotenv";
import { expressServer } from "./server";

dotenv.config();
const PORT: number | string = process.env.PORT || 3000;

expressServer.listen(PORT, (): void => {
    // tslint:disable-next-line:no-console
    console.log(`Server is live at localhost:${PORT}`);
});

import "server-only";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";

 const verifyUser = cache(async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/api/auth/register");
    }

    return user;
});

export default verifyUser;

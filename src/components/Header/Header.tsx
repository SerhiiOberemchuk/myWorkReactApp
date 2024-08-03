import React from "react";

import { FaHome } from "react-icons/fa";

import Link from "next/link";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import styles from "./Header.module.css";
import Loader from "../Loader/Loader";

type Props = { children: React.ReactNode };

const Header = ({ children }: Props) => {
  return (
    <header className={styles.description}>
      <div className={styles.descriptionHeader}>
        <Link href={"/"} className={styles.card}>
          <FaHome size={28} className={styles.iconHome} />
        </Link>
        {children}
        <div>
          <ClerkLoading>
            <Loader width={28} height={28} />
          </ClerkLoading>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import NavLink from "next/link";
import { SearchIcon } from "@/Util/Icons";

export default function NabBarNext() {
  return (
    <Navbar className="bg-transparent shadow-2xl max-w-full" isBordered>
      <NavbarContent   justify="start">
        <NavbarBrand className="max-w-full" >
          <Image
            alt="Next.js Logo"
            src={"/Logo.png"}
            width={100}
            height={100}
          />
        </NavbarBrand>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
       
      </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-5">
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink href="/about" activeClassName="active-link">
              Blog
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              About
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              Categories
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              Author
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              Shop
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/about" activeClassName="active-link">
              Contact
            </NavLink>
          </NavbarItem>
        </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              radius="lg"
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

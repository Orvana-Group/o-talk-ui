"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Client } from "@/types/Client";
export const UserHeadline = () => {
  const [user, setUser] = useState<Client | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchUserInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/user");
      if (!response.ok) {
        return;
      }
      const data: Client = await response.json();
      // Sample data
      //   data = {
      //     email: "filip.piatek2005@gmail.com",
      //     name: "Filip Piatek",
      //     avatar: "There should go a link to the avatar",
      //   };
      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const guestUser: Client = {
    name: "Guest",
    email: "You are not logged in",
    avatar: "some random words to make the avatar fallback work",
  };

  const displayUser = user || guestUser;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Card className="flex items-center space-x-4 p-4">
      {/* Skeleton dla danych użytkownika */}
      {loading ? (
        <>
          <div className="space-y-2 flex flex-col items-end">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <Skeleton className="w-10 h-10 rounded-full" />
        </>
      ) : (
        <>
          <div className="space-y-2 flex flex-col items-end">
            <span className="text-sm font-semibold w-[100px] text-right">
              {displayUser.name}
            </span>
            <span className="text-xs w-[200px] text-right">
              {displayUser.email}
            </span>
          </div>
          <Avatar>
            <AvatarImage
              src={displayUser.avatar}
              alt={`Avatar of ${displayUser.name}`}
            />
            <AvatarFallback>
              {displayUser.name
                .split(" ")
                .map((name) => name.charAt(0))
                .join("")}
            </AvatarFallback>
          </Avatar>
        </>
      )}
    </Card>
  );
};

import React from "react";

interface IProps {
    name: string;
    projectName: string; 
    createdTime: string;
}

function ProfileSection({name, projectName, createdTime}: IProps) {
  return (
    <div className="flex gap-4 items-center flex-1">
      <div className="w-10 h-10 rounded-full bg-white" />
        <div>
        <p className="text-mainText font-bold">{name} / {projectName}</p>
        <p className="text-secondaryText text-sm">Created {createdTime}</p>
        </div>
    </div>
  );
}

export default ProfileSection;

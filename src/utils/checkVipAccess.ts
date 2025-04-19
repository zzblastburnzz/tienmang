export function canInteractWithMember(member, user) {
  if (!member.requireVipToMessage) return true;
  if (user.isVip || user.tuViLevel >= 3) return true;
  return false;
}

#include "Knife.h"

Knife::Knife()
{
	this->baseDamage = 10;
	this->m_WeaponName = "ะกตถ";
}

int Knife::getBaseDamage()
{
	return this->baseDamage;
}

int Knife::getSukBlood()
{
	return 0;
}

bool Knife::getHold()
{
	return false;
}

bool Knife::getCrit()
{
	return false;
}

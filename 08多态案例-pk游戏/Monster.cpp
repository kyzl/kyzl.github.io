#include "Monster.h"

Monster::Monster()
{
	this->m_Hp = 300;
	this->m_Atk = 10;
	this->m_Def = 40;
	this->m_MonsterName = "哥斯拉";
	this->is_Hold = false;
}

void Monster::attackHero(Hero * hero)
{
	//
	if (this->is_Hold) {
		cout << "怪物"<< this->m_MonsterName<<"被定身了，本回合无法攻击" << endl;
		return;
	}

	// 计算攻击伤害
	int damage = (this->m_Atk - hero->m_Def) > 0 ? this->m_Atk - hero->m_Def : 1;

	hero->m_Hp -= damage;
	cout << "怪物" << this->m_MonsterName << "攻击了" << hero->m_HeroName << ",造成了"
		<< damage << "伤害" << endl;

}
